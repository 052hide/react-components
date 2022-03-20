export * from './pet'

import * as allHandlers from '../handlers'

export const handlers = [allHandlers.mockPetHandler.fetchList.success()]
