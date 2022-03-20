import { usePets } from '@/hooks/reactQuery/pet'

export const ReactQueryQuery = () => {
  const { data } = usePets({})

  return (
    <div>
      {data && (
        <ul>
          {data.data.items.map((p) => {
            return <li key={p.id}>{p.name}</li>
          })}
        </ul>
      )}
    </div>
  )
}
