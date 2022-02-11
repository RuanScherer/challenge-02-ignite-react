interface HeaderProps {
  selectedGenreName: string
}

export function Header(props: HeaderProps) {
  return (
    <header>
      <span className="category">Categoria:<span> {props.selectedGenreName}</span></span>
    </header>
  )
}