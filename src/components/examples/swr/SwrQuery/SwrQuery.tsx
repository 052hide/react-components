import clsx from 'clsx'

import { usePets } from '@/hooks/swr/pet'

export const SwrQuery = () => {
  const { data } = usePets({})

  return (
    <div>
      {data && (
        <ul
          className={clsx(
            'tw-w-full',
            'tw-flex tw-flex-col tw-justify-center',
            'tw-divide-y'
          )}
        >
          {data.data.items.map((p) => {
            return (
              <li key={p.id} className={clsx('tw-px-4 tw-py-2')}>
                {p.name}
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}
