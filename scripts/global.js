import * as g from '../global.js';

export function acceptCookieUse() {
  g.storage.local.set('cookieUse', true);
}