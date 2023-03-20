import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html>
                <Head>
                    <link
                        href="https://fonts.bunny.net/css2?family=Nunito:wght@400;600;700&display=swap"
                        rel="stylesheet"
                    />
                    {/* <!--CDN CSS--> */}
                    <link
                        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
                        rel="stylesheet"
                        integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
                        crossorigin="anonymous"
                    />
                    <link
                        rel="stylesheet"
                        href="https://pro.fontawesome.com/releases/v5.13.0/css/all.css"
                        integrity="sha384-IIED/eyOkM6ihtOiQsX2zizxFBphgnv1zbe1bKA+njdFzkr6cDNy16jfIKWu4FNH"
                        crossorigin="anonymous"
                    />
                    {/* <!--kudasai CSS--> */}
                    <link rel="stylesheet" href="assets/css/css.css" />
                    <link rel="stylesheet" href="assets/css/chat.css" />
                    <link
                        rel="stylesheet"
                        href="https://cdnjs.cloudflare.com/ajax/libs/tachyons/4.11.1/tachyons.min.css"
                    />
                    <link rel="stylesheet" href="assets/css/resize.css" />
                </Head>
                <body className="antialiased">
                    <Main />
                    <NextScript />
                    {/* <!--CDN JS--> */}
                    <script
                        src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"
                        integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3"
                        crossorigin="anonymous"></script>
                    <script
                        src="https://code.jquery.com/jquery-3.6.0.min.js"
                        type="text/javascript"></script>
                </body>
            </Html>
        )
    }
}

export default MyDocument
