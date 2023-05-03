export function PageTitle({ title }){
    return(
        <div className="page-title">{ title || '{insira um titulo}' }</div>
    )
}