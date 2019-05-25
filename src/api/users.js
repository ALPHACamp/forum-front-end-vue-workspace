import { apiHelper } from '@/utils/helpers'

export default {
  getTopUsers() {
    return apiHelper.get('/users/top')
  },
  addFavorite({ restaurantId }) {
    return apiHelper.post(`/favorite/${restaurantId}`)
  },
  removeFavorite({ restaurantId }) {
    return apiHelper.delete(`/favorite/${restaurantId}`)
  },
  addLike({ restaurantId }) {
    return apiHelper.post(`/like/${restaurantId}`)
  },
  removeLike({ restaurantId }) {
    return apiHelper.delete(`/like/${restaurantId}`)
  },
  addFollowing({ userId }) {
    return apiHelper.post(`/following/${userId}`)
  },
  removeFollowing({ userId }) {
    return apiHelper.delete(`/following/${userId}`)
  }
}
