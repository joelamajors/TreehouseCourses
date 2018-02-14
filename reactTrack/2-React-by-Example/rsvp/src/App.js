import React, { Component } from 'react';
import GuestList from './GuestList';
// import './App.css';

class App extends Component {

    state = {
        guests: [
            {
                name: 'Treasure',
                isConfirmed: false,
                isEditing: false
            },
            {
                name: 'Nick',
                isConfirmed: true,
                isEditing: false
            }, 
            {
                name: 'Joel',
                isConfirmed: false,
                isEditing: true
            }
        ]
    };


    toggleGuestPropertyAt = (property, indexToChange) =>
        this.setState({
            // going through the array to just get one guest at a time.
            guests: this.state.guests.map((guest, index) => {
                if (index === indexToChange) {
                    return {
                        ...guest,
                        // ellipsis is a "spread operator". need to look that up!
                        // transfers keys and values from one object to another.
                        // next line overwrites the earlier key with the below value.
                        [property]: !guest[property]
                    };
                }
                return guest;
            })
        });

    toggleConfirmationAt = index => this.toggleGuestPropertyAt("isConfirmed", index);
    toggleEditingAt = index => this.toggleGuestPropertyAt("isEditing", index);


    setNameAt = (name, indexToChange) =>
        this.setState({
            guests: this.state.guests.map((guest, index) => {
                if (index === indexToChange) {
                    return {
                        ...guest,
                        name
                    };
                }
                return guest;
            })
        });

    //will toggle confirmation at specified index

    getTotalInvited = () => this.state.guests.length;
    // getAttendingGuests = () =>
    // getUnfonfirmedGuests = () =>

    render() {
        return (
            <div className="App">
            <header>
                <h1>RSVP</h1>
                <p>A Treehouse App</p>
                <form>
                    <input type="text" value="Safia" placeholder="Invite Someone" />
                    <button type="submit" name="submit" value="submit">Submit</button>
                </form>
            </header>
                <div className="main">
                    <div>
                        <h2>Invitees</h2>
                        <label>
                            <input type="checkbox" /> Hide those who haven't responded
                        </label>
                    </div>
                    <table className="counter">
                        <tbody>
                            <tr>
                                <td>Attending:</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td>Unconfirmed:</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>Total:</td>
                                <td>3</td>
                            </tr>
                        </tbody>
                    </table>

                    <GuestList
                        guests={this.state.guests} 
                        toggleConfirmationAt={this.toggleConfirmationAt}
                        toggleEditingAt={this.toggleEditingAt}
                        setNameAt={this.setNameAt}
                    />

                </div>
            </div>
        );
    }
}

export default App;