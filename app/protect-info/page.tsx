type ServerRequest = {
    searchParams : Record<string, string>;
    params : Record<string, string>;
}

export default function Home(req: ServerRequest) {
    // console.log('Protected info');
    // console.log(req);
    return (
        <>
        <h1>Protected info</h1>
            <p>У Вас недостаточно прав для просмотра предыдущей страницы</p>
            <p>{req.searchParams.OriginalUrl}</p>
        </>
    );
}