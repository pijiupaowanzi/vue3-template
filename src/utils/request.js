import axios from 'axios'
import { getItem } from './localStorage.js'

function errorHandler(code) {
	switch (code) {
		case 500:
			return '请求处理失败'
		case 401:
			return '请求未认证，跳转登录页'
	}
}

const service = axios.create({
	baseURL: import.meta.env.VITE_BASE_API,
	timeout: 10000,
	headers: {
		'Content-Type': 'application/json;charset=utf-8'
	}
})

// 响应拦截器
service.interceptors.response.use(
	(response) => {
		const { status, data } = response

		if (status !== 200) {
			console.log(status + errorHandler(status))
			if (status === 401) {
				console.log('跳转登录页')
			}
			throw new Error(status)
		}
		return data
	},
	(error) => {
		let { message } = error
		console.log(message)
		return Promise.reject(error)
	}
)

// 请求拦截器
service.interceptors.request.use(
	(config) => {
		if (getItem('token')) {
			config.headers['Authorization'] = 'Bearer ' + getItem('token')
		}
		return config
	},
	(error) => {
		error.data = {}
		error.data.msg = '服务器异常'
		return Promise.reject(error)
	}
)

export default service
