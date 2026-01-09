const SESSION_KEY = 'nacre_admin_session';
const FIVE_DAYS_MS = 5 * 24 * 60 * 60 * 1000;

export const setAdminSession = () => {
  const session = {
    value: 'authenticated',
    expiry: new Date().getTime() + FIVE_DAYS_MS
  };
  localStorage.setItem(SESSION_KEY, JSON.stringify(session));
};

export const checkAdminSession = () => {
  const sessionStr = localStorage.getItem(SESSION_KEY);
  if (!sessionStr) return false;
  
  const session = JSON.parse(sessionStr);
  const now = new Date().getTime();
  
  if (now > session.expiry) {
    localStorage.removeItem(SESSION_KEY);
    return false;
  }
  return true;
};

export const clearAdminSession = () => {
  localStorage.removeItem(SESSION_KEY);
};