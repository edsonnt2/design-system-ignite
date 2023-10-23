interface TokensGridProd {
  tokens: Record<string, string>
}

export function TokensGrid({ tokens }: TokensGridProd) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>
  )
}
