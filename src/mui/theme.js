const mainColor = '#222222';

const darkTheme = (...idk) => {
    console.log('theme stuff', idk)
    return ({
    palette: {
        // mode: 'dark',
        primary: {
            main: mainColor,
            contrastText: '#FFF'
        },
        // secondary: {
        //     main: '#FFF',
        //     contrastText: mainColor
        // }
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    // Some CSS
                    borderColor: mainColor,
                },
            }
        },
        MuiListSubheader: {
            styleOverrides: {
                root: {
                    // Some CSS
                    backgroundColor: "inherit",
                    color: "inherit",
                },
            }
        },
        // MuiGrid: {
        //     styleOverrides: {
        //         root: {
        //             // Some CSS
        //             backgroundColor: "inherit",
        //             color: "inherit",
        //         },
        //     }
        // },
    }
})};

export default darkTheme;