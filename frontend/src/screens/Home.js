import React from 'react';
import { Container } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';

export default function HomeScreen() {
  return (
    <Container>
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <br />
      <div className='box'>
        <h1>Home Page</h1>
      </div>

      <p className='box'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula
        neque lectus, vel mollis nibh porttitor nec. Donec ullamcorper, metus
        sed sagittis rhoncus, dolor mi rutrum urna, eu ultrices orci eros ac
        erat. Phasellus varius enim vel dui fringilla euismod. Maecenas
        fermentum, quam id tincidunt congue, erat est tempor nisi, ut vestibulum
        libero mi quis est. Aenean scelerisque neque vitae nibh semper finibus.
        Nunc suscipit, sem ut commodo fringilla, tortor arcu placerat nisi, ac
        tempus lorem ligula quis est. Sed augue purus, ullamcorper eu diam
        interdum, tincidunt ultricies turpis. Cras nec sapien purus. Phasellus
        commodo pulvinar enim. Nulla facilisi. Pellentesque dictum turpis in
        pulvinar scelerisque. Orci varius natoque penatibus et magnis dis
        parturient montes, nascetur ridiculus mus. Praesent felis lorem,
        bibendum ac pharetra nec, fermentum aliquam ipsum. Vestibulum ac nibh
        vitae enim ornare viverra.
      </p>
    </Container>
  );
}
