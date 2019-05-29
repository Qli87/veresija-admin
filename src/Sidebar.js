import React from 'react'
import { NavLink } from 'react-router-dom';
import Clock from 'react-live-clock';
import MaterialIcon from 'material-icons-react';
import Select from 'react-select'
import { renderToStaticMarkup } from "react-dom/server"; 
import { withLocalize, Translate } from "react-localize-redux";


class Sidebar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            translations: []
        }

        this.props.initialize({
            languages: [
                {name: "Latinica", code: "lt"},
                {name: "Cirilica", code: "cr"}
            ],
            options: {
                renderToStaticMarkup,
                defaultLanguage: 'lt'
            }
        })
        // this.props.addTranslation(this.state.translations);
        this.onChangeLanguage = this.onChangeLanguage.bind(this);
    }


    onChangeLanguage(_slag) {
        this.props.setActiveLanguage(_slag.value);
    }

    componentDidMount() {
        this.props.getTranslations();
    }


    componentWillReceiveProps(nextProps) {
        if(nextProps.translations !== undefined) {
            const trans = nextProps.translations[0];
            this.setState({
                translations: trans
            })
        this.props.addTranslation(trans);
        }
    }


    render() {
        const languageInSelect = [
            { label: 'Latinica', value: 'lt' },
            { label: 'Cirilica', value: 'cr' }
          ];

        return(
            <div className="sidebar" style={{'backgroundImage': 'url(assets/img/sb1.jpg)'}}
                data-color="purple" data-background-color="white" 
                data-image="../assets/img/sidebar-1.jpg">
            {/* <div>
                <Select 
                    onChange={this.onChangeLanguage}
                    options={languageInSelect}
                    defaultValue={{label: 'Latinica', value: 'lt'}}
                />
            </div> */}
            <div className="logo">
                {/* <a to="/" className="simple-text logo-normal">
                    Veresija
                </a> */}
                <div style={{'textAlign':'center', 'fontStyle':'italic'}}>
                  <Clock format={'HH:mm:ss'} ticking={true} />
                </div>
            </div>
            <div className="sidebar-wrapper">
                <ul className="nav" >
                    <li className="nav-item ">
                        <NavLink to="/pocetna" exact={true} className="nav-link"  activeStyle={{ 'backgroundColor': '#9c27b0', 'color':'white', 'fontWeight':'bold'}}>
                            <MaterialIcon icon="dashboard" />
                            {/* <i className="material-icons">dashboard</i> */}
                            <Translate id="homePage">Početna</Translate>
                        </NavLink>
                    </li>
                    <li className="nav-item ">
                        <NavLink to="/listaKorisnika" exact={true} className="nav-link" activeStyle={{ 'backgroundColor': '#9c27b0', 'color':'white','fontWeight':'bold'}}>
                            <i className="material-icons">person</i>
                            <Translate id="userList"></Translate>
                        </NavLink>
                    </li>


                    <li className="nav-item ">
                        <NavLink to="/neaktivniKorisnici" className="nav-link" activeStyle={{ 'backgroundColor': '#9c27b0', 'color':'white','fontWeight':'bold' }}>
                            <i className="material-icons">remove_circle_outline</i>
                            <Translate id="userInactive"></Translate>
                        </NavLink>
                    </li>

                    <li className="nav-item ">
                        <NavLink to="/dodajKorisnika" className="nav-link" activeStyle={{ 'backgroundColor': '#9c27b0', 'color':'white','fontWeight':'bold' }}>
                            <i className="material-icons">person_add</i>
                            <Translate id="userAdd"></Translate>
                        </NavLink>
                    </li>

                    <li className="nav-item ">
                        <NavLink to="/istekleLicence" className="nav-link" activeStyle={{ 'backgroundColor': '#9c27b0', 'color':'white','fontWeight':'bold' }}>
                            <i className="material-icons">assignment_late</i>
                            <Translate id="licenceExpired"></Translate>
                        </NavLink>
                    </li>

                    <li className="nav-item ">
                        <NavLink to="/isticuUskoro" className="nav-link" activeStyle={{ 'backgroundColor': '#9c27b0', 'color':'white','fontWeight':'bold' }}>
                            <i className="material-icons">assignment_turned_in</i>
                            <Translate id="licenceExpiredSoon"></Translate>
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <div className="nav-link">
                            <Select 
                                onChange={this.onChangeLanguage}
                                options={languageInSelect}
                                defaultValue={{label: 'Latinica', value: 'lt'}}
                            />
                        </div>
                    </li>
                </ul>

            </div>
        </div>
        )
    }
}

export default withLocalize(Sidebar)