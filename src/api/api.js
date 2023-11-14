import request from '@/utils/request.js'

// 获取xxx列表
export function getXXXInfo(params) {
	return request.get('/api/xxx/', params)
}
