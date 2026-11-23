import { FC, useCallback, useMemo } from 'react'
import { Excalidraw } from '@excalidraw/excalidraw'
import type { ExcalidrawInitialDataState } from '@excalidraw/excalidraw/types'
import '@excalidraw/excalidraw/index.css'
import { SITE } from '../site'

type SavedScene = {
  elements?: readonly unknown[]
  appState?: Record<string, unknown>
  files?: Record<string, unknown>
}

function loadScene(): SavedScene | null {
  try {
    const raw = window.localStorage.getItem(SITE.storageKey)
    if (!raw) return null
    return JSON.parse(raw) as SavedScene
  } catch {
    return null
  }
}

function cleanAppState(appState: Record<string, unknown> | undefined) {
  if (!appState) return undefined
  const copy = { ...appState }
  delete copy.collaborators
  delete copy.username
  copy.isCollaborating = false
  return copy
}

export const HomePage: FC = () => {
  const initialData = useMemo((): ExcalidrawInitialDataState => {
    const saved = loadScene()
    const bg =
      typeof saved?.appState?.viewBackgroundColor === 'string'
        ? saved.appState.viewBackgroundColor
        : '#ffffff'
    const theme =
      saved?.appState?.theme === 'dark' || saved?.appState?.theme === 'light'
        ? saved.appState.theme
        : 'light'
    return {
      elements: (saved?.elements ?? []) as ExcalidrawInitialDataState['elements'],
      appState: {
        ...cleanAppState(saved?.appState),
        viewBackgroundColor: bg,
        currentItemStrokeColor: '#1e1e1e',
        currentItemBackgroundColor: 'transparent',
        theme,
      },
      files: (saved?.files ?? {}) as ExcalidrawInitialDataState['files'],
      scrollToContent: true,
    }
  }, [])

  const persist = useCallback(
    (elements: readonly unknown[], appState: Record<string, unknown>, files: Record<string, unknown>) => {
      try {
        const payload: SavedScene = {
          elements,
          appState: cleanAppState(appState),
          files,
        }
        window.localStorage.setItem(SITE.storageKey, JSON.stringify(payload))
      } catch {
        /* quota or private mode */
      }
    },
    [],
  )

  return (
    <section className="whiteboard-page" aria-label="Drawing canvas">
      <div className="whiteboard-wrap">
        <Excalidraw
          langCode="en"
          initialData={initialData}
          onChange={(elements, appState, files) => {
            persist(elements, appState as unknown as Record<string, unknown>, files)
          }}
          viewModeEnabled={false}
          zenModeEnabled={false}
          gridModeEnabled={false}
          UIOptions={{
            canvasActions: {
              changeViewBackgroundColor: true,
              clearCanvas: true,
              export: { saveFileToDisk: true },
              loadScene: true,
              saveToActiveFile: false,
              toggleTheme: true,
            },
          }}
        />
      </div>
    </section>
  )
}