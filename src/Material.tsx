
import { AppBar, Button, createMuiTheme, createStyles, Icon, InputBase, MuiThemeProvider, Toolbar, IconButton, Menu, MenuItem } from "@material-ui/core";
import { grey, pink, common } from "@material-ui/core/colors";
import { fade, makeStyles, Theme } from "@material-ui/core/styles";
import { Dashboard, Search, AccountCircle } from '@material-ui/icons';
import * as React from "react";
import { render } from "react-dom";
// .dark-blue {color: #213159}
// .sky-blue {color: #3d6098}
// .sexy-red {color: #f04b4c}
// .fresh-grey {color: #e7e7e7}
const theme = createMuiTheme({
    "palette":
    {
        "common":
            { "black": "#000", "white": "rgba(255, 255, 255, 1)" },
        "background": { "paper": "#fff", "default": "rgba(255, 255, 255, 0.7)" },
        "primary": {
            "light": "rgba(61, 96, 152, 1)",
            "main": "rgba(61, 96, 152, 1)",
            "dark": "rgba(33, 49, 89, 1)", "contrastText": "#fff"
        }, "secondary": { "light": "rgba(248, 104, 105, 1)", "main": "rgba(240, 75, 76, 1)", "dark": "rgba(246, 59, 60, 1)", "contrastText": "#fff" }, "error": { "light": "#e57373", "main": "#f44336", "dark": "#d32f2f", "contrastText": "#fff" }, "text": { "primary": "rgba(0, 0, 0, 0.87)", "secondary": "rgba(0, 0, 0, 0.54)", "disabled": "rgba(0, 0, 0, 0.38)", "hint": "rgba(0, 0, 0, 0.38)" }
    }
});

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        grow: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            display: 'none',
            [theme.breakpoints.up('sm')]: {
                display: 'block',
            },
        },
        search: {
            position: 'relative',
            borderRadius: theme.shape.borderRadius,
            backgroundColor: fade(theme.palette.common.white, 0.15),
            '&:hover': {
                backgroundColor: fade(theme.palette.common.white, 0.25),
            },
            marginRight: theme.spacing(2),
            marginLeft: 0,
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                marginLeft: theme.spacing(3),
                width: 'auto',
            },
        },
        searchIcon: {
            width: theme.spacing(7),
            height: '100%',
            position: 'absolute',
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        inputRoot: {
            color: 'inherit',
        },
        inputInput: {
            padding: theme.spacing(1, 1, 1, 7),
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('md')]: {
                width: 200,
            },
        },
        sectionDesktop: {
            display: 'none',
            [theme.breakpoints.up('md')]: {
                display: 'flex',
            },
        },
        sectionMobile: {
            display: 'flex',
            [theme.breakpoints.up('md')]: {
                display: 'none',
            },
        },
    }),
);

function Home() {
    const menuId = 'primary-search-account-menu';
    const [anchorEl, setAnchorEl] = React.useState(null);
    const isMenuOpen = Boolean(anchorEl);
    const classes = useStyles();

    function handleProfileMenuOpen(event: React.MouseEvent) {
        setAnchorEl(event.currentTarget);
    }

    function handleMenuClose() {
        setAnchorEl(null);
    }


    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    );

    return (
        <MuiThemeProvider theme={theme}>
            <AppBar>
                <Toolbar>
                    <Icon> <Dashboard /></Icon>
                    <Button>
                        Analytics
                    </Button>
                    <Button>
                        Feeds
                    </Button>
                    <Button>
                        Domains
                    </Button>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <Search />
                        </div>
                        <InputBase
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>
                    <div className={classes.grow} />
                    <IconButton onClick={handleProfileMenuOpen}>
                        <AccountCircle />
                    </IconButton>
                </Toolbar>
            </AppBar>{renderMenu}</MuiThemeProvider>);
}
render(<Home />
    , document.getElementById('main'));