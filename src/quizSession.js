const sessionKey = 'kidscards.quiz-session'

export function readQuizSession() {
  try {
    const rawSession = window.localStorage.getItem(sessionKey)
    if (!rawSession) return null

    const session = JSON.parse(rawSession)
    if (!Array.isArray(session?.completedQuestions)) return null

    return {
      completedQuestions: session.completedQuestions.filter(Number.isInteger),
      paused: session.paused === true,
    }
  } catch {
    return null
  }
}

export function saveQuizSession(session) {
  try {
    window.localStorage.setItem(sessionKey, JSON.stringify(session))
    return true
  } catch {
    return false
  }
}