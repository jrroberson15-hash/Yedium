// Tab cloaking presets and about:blank launcher utility (JavaScript)

export const CLOAK_PRESETS = {
  classroom: {
    label: 'Google Classroom',
    title: 'Classes',
    iconUrl: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'><rect width='44' height='36' x='2' y='6' rx='4' fill='%23137333'/><rect width='36' height='28' x='6' y='10' rx='2' fill='%230f9d58'/><path fill='%23fff' d='M24 16a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm-8 14c0-2.67 5.33-4 8-4s8 1.33 8 4v2H16v-2z'/></svg>",
    previewColor: '#137333',
  },
  google: {
    label: 'Google',
    title: 'Google',
    iconUrl: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'><path fill='%23EA4335' d='M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z'/><path fill='%234285F4' d='M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z'/><path fill='%23FBBC05' d='M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z'/><path fill='%2334A853' d='M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z'/></svg>",
    previewColor: '#4285F4',
  },
  docs: {
    label: 'Google Docs',
    title: 'Untitled document - Google Docs',
    iconUrl: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'><path fill='%232684FC' d='M30 4H10a4 4 0 0 0-4 4v32a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4V16L30 4z'/><path fill='%23a2c6fd' d='M30 4v12h12'/><rect x='14' y='22' width='20' height='2.5' rx='1' fill='%23fff'/><rect x='14' y='28' width='20' height='2.5' rx='1' fill='%23fff'/><rect x='14' y='34' width='14' height='2.5' rx='1' fill='%23fff'/></svg>",
    previewColor: '#2684fc',
  },
  slides: {
    label: 'Google Slides',
    title: 'Untitled presentation - Google Slides',
    iconUrl: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'><path fill='%23F4B400' d='M30 4H10a4 4 0 0 0-4 4v32a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4V16L30 4z'/><path fill='%23FBE7A1' d='M30 4v12h12'/><rect x='13' y='20' width='22' height='16' rx='2' fill='%23fff'/><rect x='15' y='22' width='18' height='12' rx='1' fill='%23F4B400'/></svg>",
    previewColor: '#f4b400',
  },
  none: {
    label: 'No Cloak at all',
    title: 'Yedium — Unblocked Hub',
    iconUrl: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%236366f1'><polygon points='12 2 2 7 12 12 22 7 12 2'/><polyline points='2 17 12 22 22 17' stroke='%236366f1' stroke-width='2'/><polyline points='2 12 12 17 22 12' stroke='%236366f1' stroke-width='2'/></svg>",
    previewColor: '#6366f1',
  },
  default: {
    label: 'Yedium Hub',
    title: 'Yedium — Unblocked School Portal',
    iconUrl: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%236366f1'><polygon points='12 2 2 7 12 12 22 7 12 2'/><polyline points='2 17 12 22 22 17'/><polyline points='2 12 12 17 22 12'/></svg>",
    previewColor: '#6366f1',
  },
  drive: {
    label: 'Google Drive',
    title: 'My Drive - Google Drive',
    iconUrl: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'><path fill='%23FFC107' d='M17 6h14l11 19H28z'/><path fill='%234CAF50' d='M6 42l7-12h28l-7 12z'/><path fill='%232196F3' d='M6 42l11-36h7L13 30z'/></svg>",
    previewColor: '#ffc107',
  },
  canvas: {
    label: 'Canvas LMS',
    title: 'Dashboard',
    iconUrl: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'><circle cx='24' cy='24' r='20' fill='%23E13F2B'/><circle cx='24' cy='24' r='10' fill='%23fff'/><circle cx='24' cy='24' r='5' fill='%23E13F2B'/></svg>",
    previewColor: '#e13f2b',
  },
  docs: {
    label: 'Google Docs',
    title: 'Untitled document - Google Docs',
    iconUrl: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'><path fill='%232684FC' d='M30 4H10a4 4 0 0 0-4 4v32a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4V16L30 4z'/><path fill='%23a2c6fd' d='M30 4v12h12'/><rect x='14' y='22' width='20' height='2.5' rx='1' fill='%23fff'/><rect x='14' y='28' width='20' height='2.5' rx='1' fill='%23fff'/><rect x='14' y='34' width='14' height='2.5' rx='1' fill='%23fff'/></svg>",
    previewColor: '#2684fc',
  },
  khan: {
    label: 'Khan Academy',
    title: 'Dashboard | Khan Academy',
    iconUrl: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'><path fill='%2314BF96' d='M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm-2 29l-8-8 3-3 5 5 11-11 3 3-14 14z'/></svg>",
    previewColor: '#14bf96',
  },
  wikipedia: {
    label: 'Wikipedia',
    title: 'Wikipedia, the free encyclopedia',
    iconUrl: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'><circle cx='24' cy='24' r='20' fill='%23000'/><text x='24' y='32' fill='%23fff' font-family='serif' font-size='24' font-weight='bold' text-anchor='middle'>W</text></svg>",
    previewColor: '#71717a',
  },
  desmos: {
    label: 'Desmos Graphing',
    title: 'Desmos | Graphing Calculator',
    iconUrl: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'><rect width='40' height='40' x='4' y='4' rx='8' fill='%232f72a6'/><path fill='none' stroke='%232ec4b6' stroke-width='4' stroke-linecap='round' d='M10 32 C 16 32, 18 16, 24 16 C 30 16, 32 32, 38 32'/></svg>",
    previewColor: '#2f72a6',
  },
  custom: {
    label: 'Custom Disguise',
    title: 'Student Portal',
    iconUrl: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%2310b981'><circle cx='12' cy='12' r='10'/></svg>",
    previewColor: '#10b981',
  },
};

export function applyCloak(config) {
  try {
    if (!config) return;
    document.title = config.title;
    let link = document.getElementById('dynamic-favicon');
    if (!link) {
      link = document.createElement('link');
      link.id = 'dynamic-favicon';
      link.rel = 'icon';
      document.head.appendChild(link);
    }
    link.href = config.iconUrl;
  } catch (err) {
    console.error('Failed to apply cloak', err);
  }
}

// Emergency Tab Closer with seamless redirect fallback
export function closeCurrentTab() {
  try {
    // Attempt script window close
    window.close();
    window.open('', '_self', '');
    window.close();

    // Browsers block closing tabs that weren't opened by script via window.open.
    // If the window is still open after 30ms, immediately replace the page with Google Classroom
    setTimeout(() => {
      window.location.replace('https://classroom.google.com');
    }, 40);
  } catch {
    window.location.replace('https://classroom.google.com');
  }
}

export function openAboutBlank(customUrl) {
  try {
    const win = window.open('about:blank', '_blank');
    if (!win) {
      return false;
    }
    win.document.title = document.title || 'Classes';

    const currentFavicon = document.getElementById('dynamic-favicon')?.href;
    if (currentFavicon) {
      const link = win.document.createElement('link');
      link.rel = 'icon';
      link.href = currentFavicon;
      win.document.head.appendChild(link);
    }

    const iframe = win.document.createElement('iframe');
    iframe.style.position = 'fixed';
    iframe.style.top = '0';
    iframe.style.bottom = '0';
    iframe.style.left = '0';
    iframe.style.right = '0';
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.border = 'none';
    iframe.style.margin = '0';
    iframe.style.padding = '0';
    iframe.style.overflow = 'hidden';
    iframe.style.zIndex = '999999';
    iframe.src = customUrl || window.location.href;

    win.document.body.style.margin = '0';
    win.document.body.style.overflow = 'hidden';
    win.document.body.appendChild(iframe);
    return true;
  } catch (err) {
    console.error('Failed to open about:blank window', err);
    return false;
  }
}
