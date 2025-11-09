import { applyDecorators } from '@nestjs/common'
import { ApiOperation, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger'

export function GetAllLearningsDocs() {
	return applyDecorators(
		ApiOperation({
			summary: 'Получить все обучающие материалы',
			description:
				'Возвращает список всех обучающих материалов с контентом и файлами'
		}),
		ApiResponse({
			status: 200,
			description: 'Список обучающих материалов успешно получен',
			schema: {
				type: 'array',
				items: {
					type: 'object',
					properties: {
						id: { type: 'number', example: 1 },
						title: {
							type: 'string',
							example: 'Основы программирования'
						},
						content: {
							type: 'array',
							items: {
								type: 'object',
								properties: {
									id: { type: 'number', example: 1 },
									description: {
										type: 'string',
										example: 'Введение в переменные'
									},
									files: {
										type: 'array',
										items: {
											type: 'object',
											properties: {
												id: {
													type: 'number',
													example: 1
												},
												url: {
													type: 'string',
													example:
														'/uploads/image.jpg'
												},
												type: {
													type: 'string',
													enum: [
														'IMAGE',
														'VIDEO',
														'LEARNING'
													],
													example: 'IMAGE'
												}
											}
										}
									}
								}
							}
						},
						createdAt: {
							type: 'string',
							format: 'date-time',
							example: '2025-11-09T10:00:00.000Z'
						},
						updatedAt: {
							type: 'string',
							format: 'date-time',
							example: '2025-11-09T10:00:00.000Z'
						}
					}
				}
			}
		}),
		ApiResponse({
			status: 401,
			description: 'Не авторизован'
		})
	)
}

export function CreateLearningDocs() {
	return applyDecorators(
		ApiOperation({
			summary: 'Создать новый обучающий материал',
			description:
				'Создает новый обучающий материал с контентом. Требуется роль ADMIN'
		}),
		ApiBody({
			schema: {
				type: 'object',
				required: ['title', 'content'],
				properties: {
					title: {
						type: 'string',
						example: 'Основы TypeScript',
						description: 'Название обучающего материала'
					},
					content: {
						type: 'array',
						description: 'Массив блоков контента',
						items: {
							type: 'object',
							required: ['description'],
							properties: {
								description: {
									type: 'string',
									example: 'Типы данных в TypeScript',
									description: 'Описание блока контента'
								},
								files: {
									type: 'array',
									description:
										'Массив ID файлов для прикрепления',
									items: {
										type: 'number',
										example: 1
									}
								}
							}
						}
					}
				}
			}
		}),
		ApiResponse({
			status: 201,
			description: 'Обучающий материал успешно создан',
			schema: {
				type: 'object',
				properties: {
					id: { type: 'number', example: 1 },
					title: { type: 'string', example: 'Основы TypeScript' },
					content: {
						type: 'array',
						items: {
							type: 'object',
							properties: {
								id: { type: 'number', example: 1 },
								description: {
									type: 'string',
									example: 'Типы данных в TypeScript'
								},
								files: {
									type: 'array',
									items: { type: 'object' }
								}
							}
						}
					},
					createdAt: { type: 'string', format: 'date-time' },
					updatedAt: { type: 'string', format: 'date-time' }
				}
			}
		}),
		ApiResponse({
			status: 401,
			description: 'Не авторизован'
		}),
		ApiResponse({
			status: 403,
			description: 'Недостаточно прав (требуется роль ADMIN)'
		}),
		ApiResponse({
			status: 400,
			description: 'Невалидные данные'
		})
	)
}

export function UpdateLearningDocs() {
	return applyDecorators(
		ApiOperation({
			summary: 'Обновить обучающий материал',
			description:
				'Универсальный метод для обновления: изменение заголовка, добавление/удаление контента, управление файлами. Требуется роль ADMIN'
		}),
		ApiParam({
			name: 'id',
			type: 'number',
			description: 'ID обучающего материала',
			example: 1
		}),
		ApiBody({
			schema: {
				type: 'object',
				required: ['id'],
				properties: {
					id: {
						type: 'number',
						example: 1,
						description: 'ID обучающего материала (обязательно)'
					},
					title: {
						type: 'string',
						example: 'Обновленное название',
						description: 'Новое название (опционально)'
					},
					content: {
						type: 'array',
						description:
							'Массив блоков контента для обновления или создания',
						items: {
							type: 'object',
							properties: {
								id: {
									type: 'number',
									example: 1,
									description:
										'ID существующего контента для обновления (если не указан - создается новый)'
								},
								description: {
									type: 'string',
									example: 'Обновленное описание',
									description: 'Новое описание контента'
								},
								keepFileIds: {
									type: 'array',
									description:
										'ID файлов, которые нужно оставить',
									items: { type: 'number', example: 1 }
								},
								removeFileIds: {
									type: 'array',
									description:
										'ID файлов для удаления из контента',
									items: { type: 'number', example: 2 }
								}
							}
						}
					},
					removeFileIds: {
						type: 'array',
						description:
							'ID файлов для удаления из всего материала',
						items: { type: 'number', example: 3 }
					},
					removeContentIds: {
						type: 'array',
						description: 'ID блоков контента для удаления',
						items: { type: 'number', example: 1 }
					}
				}
			}
		}),
		ApiResponse({
			status: 200,
			description: 'Обучающий материал успешно обновлен'
		}),
		ApiResponse({
			status: 401,
			description: 'Не авторизован'
		}),
		ApiResponse({
			status: 403,
			description: 'Недостаточно прав (требуется роль ADMIN)'
		}),
		ApiResponse({
			status: 404,
			description: 'Обучающий материал не найден'
		}),
		ApiResponse({
			status: 400,
			description: 'Невалидные данные'
		})
	)
}

export function DeleteLearningDocs() {
	return applyDecorators(
		ApiOperation({
			summary: 'Удалить обучающий материал',
			description:
				'Удаляет обучающий материал со всем контентом и связями. Требуется роль ADMIN'
		}),
		ApiParam({
			name: 'id',
			type: 'number',
			description: 'ID обучающего материала для удаления',
			example: 1
		}),
		ApiResponse({
			status: 200,
			description: 'Обучающий материал успешно удален',
			schema: {
				type: 'object',
				properties: {
					id: { type: 'number', example: 1 },
					title: { type: 'string', example: 'Удаленный материал' },
					content: { type: 'array', items: { type: 'object' } }
				}
			}
		}),
		ApiResponse({
			status: 401,
			description: 'Не авторизован'
		}),
		ApiResponse({
			status: 403,
			description: 'Недостаточно прав (требуется роль ADMIN)'
		}),
		ApiResponse({
			status: 404,
			description: 'Обучающий материал не найден'
		})
	)
}
