import makeRequest from '@/plugins/Papierkram/helpers/makeRequest'


/**
 * Authenticates the user and updates identity with authToken, realtimeToken and subdomain.
 * Use this method only at account signup.
 * @param {string} subdomain The user's own subdomain.
 * @param {string} email The user's email.
 * @param {string} password The user's password.
 */
export const authenticate = async ( subdomain, email, password ) => {
  const authData = await makeRequest('/auth', {
    method: 'POST',
    subdomain,
    body: { email, password }
  })

  return {
    authToken: authData.token,
    realtimeToken: authData.realtime_token,
    name: authData.user_name,
    subdomain: authData.tenant_subdomain
  }
}