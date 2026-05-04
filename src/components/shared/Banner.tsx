function Banner() {
    return (
        <aside className="h-full bg-blue-800 hidden md:flex flex-col justify-between text-slate-200">
            <span />
            <div>
                <h1 className="p-4 font-bold text-5xl">MES NAISSANCES</h1>
            </div>
            <p className="p-4">&copy; {new Date().getFullYear()} adriel.tech</p>
        </aside>
    );
}

export default Banner;