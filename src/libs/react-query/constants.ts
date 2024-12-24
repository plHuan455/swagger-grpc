const QUERY_KEYS = {
  AUTH: {
    me: 'auth-me',
    signin: 'auth-signin'
  },
  REFERRAL: {
    submitCode: 'referral-submit-code' 
  },
  CLAN: {
    listMember: "clan-list-member",
    getMyClan: 'clan-get-my-clan',
    join: 'clan-join',
    top: 'clan-top',
    leave: 'clan-leave',
    level: 'clan-level',
  },
  QUEST: {
    verify: 'quest-verify',
    checkIn: 'quest-check-in',
    list: 'quest-list',
    dayAchievement: 'quest-day-achievement'
  },
  SHOP: {
    clan: 'shop-clan',
    products: 'shop-products',
    registerTransaction: 'shop-register-transaction',
    history: 'shop-history',
    star: 'shop-star'
  },
  USER: {
    frens: 'list-frens',
    checkin: 'checkin',
    upLevel: 'up-level',
    listLevel: 'user-levels'
  },
  RANK: {
    list: 'rank-list'
  },
  GAME: {
    result: 'game-get-result'
  },
  EVENT: {
    listReferralRank: 'list-referral-rank'
  }
}

export default QUERY_KEYS