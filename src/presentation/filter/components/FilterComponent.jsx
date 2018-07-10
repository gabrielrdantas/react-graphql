import * as React from 'react';
import Button from 'react-bootstrap/lib/Button';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import '../styles/filter.css';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';

class FilterComponent extends React.Component {
    constructor(props) {
        super();
        this.state = {
            isActive : false,
            idChannel: props.channelId
        };
    }

    setActive(value) {
        this.setState({
            isActive: value
        });
    }

    changeIDChannel(e) {
        this.setState({
            idChannel: e.target.value
        });
    }

    render() {
        return (
            <div className={`filter ${this.state.isActive ? 'active' : ''}`}>
                
                <Button onClick={() => this.setActive(!this.state.isActive)}>
                { !this.state.isActive ?
                    <Glyphicon glyph="align-justify" />
                    : 'X'
                }
                </Button>

                <form action={`/channel/${this.state.idChannel}`}>
                    
                    <FormGroup
                    controlId="formBasicText"
                    >
                        <ControlLabel>Insira o ID do canal</ControlLabel>
                        <FormControl
                            type="text"
                            value={this.state.idChannel}
                            placeholder="ID do canal"
                            onChange={this.changeIDChannel.bind(this)}
                        />
                    </FormGroup>
                </form>
            </div>
         );
     }
 }

export default FilterComponent;