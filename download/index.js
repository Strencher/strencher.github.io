import { pluginLink, plugins, themeLink, themes } from './constants.js';
import $ from './$.js';
import { startDownload } from './utils.js';

const params = new URLSearchParams(location.search);

if (params.has('plugin')) {
  const request = params.get('plugin');
  if (plugins.indexOf(request.trim()) > -1) {
    if (request.trim() === 'PlatformIndicators') startDownload(pluginLink.format({ name: request, filename: `A${request}` }), `A${request}.plugin.js`);
    else startDownload(pluginLink.format({ name: request, filename: request }), `${request}.plugin.js`);
  } else $('#text').innerHTML = `Plugin with name <b>${request}</b> was not found in database!`;
} else if (params.has('theme')) {
  const request = params.get('theme');
  if (themes.indexOf(request.trim()) > -1) startDownload(themeLink.format({ name: request, filename: request }), `${request}.theme.css`);
  else $('#text').innerHTML = `Theme with name <b>${request}</b> was not found in database!`;
} else {
  $('#text').textContent = '404 - Not found';
}