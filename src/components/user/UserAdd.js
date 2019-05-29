import React from 'react'; 
import { Translate } from 'react-localize-redux'
import ImageUploader from 'react-images-upload'
import {withRouter} from 'react-router-dom'

class UserAdd extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name : "",
            address: "",
            end_with: ""
        }
        this.handleChangeName = this.handleChangeName.bind(this)
        this.handleChangeAddress = this.handleChangeAddress.bind(this)
        this.handleChangeEndWith = this.handleChangeEndWith.bind(this)
        this.saveUser = this.saveUser.bind(this)
    }

    handleChangeName(e) {
        this.setState({
            name: e.target.value
        })
    }

    handleChangeAddress(e) {
        this.setState({
            address: e.target.value
        })
    }

    handleChangeEndWith(e) {
        this.setState({
            end_with: e.target.value
        })
    }

    saveUser() {

        var tempDate = new Date();
        var date = (tempDate.getMonth() + 1) + '/' + tempDate.getDate() + '/' + tempDate.getFullYear()
        const user = {
            id: 10,
            name: this.state.name,
            address: this.state.address,
            status: 'active',
            start_from: date,
            end_with: this.state.end_with
        }
        this.props.addUser(user)
        let path = '/listaKorisnika'
        this.props.history.push(path)
    }


    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className='col-lg-12 col-md-10 col-sm-12'> 
                        <div className="card">
                            <div className="card-header card-header-primary">
                            <div className="nav-tabs-navigation">
                                <div className="nav-tabs-wrapper">
                                    <ul className="nav">
                                        <li className="nav-item">  
                                            <a className="nav-link" >
                                                <i className="material-icons" title="Nazad" onClick={this.backClick} style={{'cursor':'pointer'}}>keyboard_backspace</i>
                                                <i className="material-icons p-1 ml-3">person</i> 
                                                <Translate id="editUser"></Translate> 
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            </div> 
                            <div className="card-body" >
                                {/* <form className="form"> */}
                                    <div className="row">
                                        <div className="col-lg-6 col-md-5 col-sm-6">
                                            <div className="form-group">
                                                <label className="bmd-label-floating">
                                                    <Translate id="name">Ime</Translate>
                                                </label>
                                                <input type="text" name="name"
                                                className="form-control" style={{'border': '0px'}} 
                                                value={this.state.name}
                                                onChange={this.handleChangeName} 
                                                required/>
                                            </div>
                                        </div>
                                        
                                        <div className="col-lg-6 col-md-5 col-sm-6">
                                            <div className="form-group">
                                                <label className="bmd-label-floating">
                                                    <Translate id="address"></Translate>
                                                </label>
                                                <input type="text" className="form-control" style={{'border': '0px'}}
                                                value={this.state.address}
                                                onChange={this.handleChangeAddress} 
                                                required />
                                            </div>  
                                        </div>
                                    </div>

                                    <div className="row" style={{'paddingBottom':'60px'}}>

                                        <div className="col-lg-6 col-md-5 col-sm-6">
                                            <div className="form-group">
                                                <label className="bmd-label-floating">
                                                    <Translate id="to">Do</Translate>
                                                </label>
                                                <input type="date" name="bday" max="3000-12-31" min="1000-01-01" className="form-control" style={{'border': '0px'}} 
                                                value={this.state.end_with}
                                                onChange={this.handleChangeEndWith}
                                                required/>
                                            </div>  
                                        </div>

                                        <div className="col-lg-6 offset-4">
                                            <div className="form-group" style={{'marginTop':'-66px'}}>
                                                <ImageUploader
                                                    withPreview={true}
                                                    withIcon={true}
                                                    buttonText='Choose images'
                                                    onChange={this.onDrop}
                                                    imgExtension={['.jpg', '.gif', '.png', '.gif']}
                                                    maxFileSize={5242880}
                                                    singleImage={true}
                                                    label='Odaberite sliku za korisnika'
                                                />
                                            </div>
                                        </div>
                                    </div>


                                    <div className="row">
                                        <div className="p-3">
                                            <button className="btn btn-primary pull-right" 
                                            onClick={this.saveUser}>
                                            <Translate id="saveButton">Sacuvaj</Translate>
                                            </button>
                                        </div>
                                    </div>

                                {/* </form> */}
                            </div>

                            <div className="card-footer" style={{'borderTop': '1px solid lightgray'}}>
                                <div className="stats">
                                    <i className="material-icons text-danger">warning</i>
                                    <a>Polja za ime, prezime i telefon su obavezna!</a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(UserAdd)