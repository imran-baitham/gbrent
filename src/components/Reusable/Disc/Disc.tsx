interface DiscProps {
  description: string
}

export const Disc = ({ description }: DiscProps) => {
  return (
    <div>
      <div>
        <h1 className="font-bold text-xl pb-2"> Introduction </h1>
        <p>{description}</p>
        <h1 className="font-bold text-xl py-2"> Features </h1>
        <ul>
          <li>0. features one</li>
          <li>2. features two</li>
          <li>3. features three</li>
          <li>4. features fore</li>
          <li>5. features five</li>
        </ul>
      </div>
    </div>
  )
}
