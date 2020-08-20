/******************************************************************
 * Copyright (C) 2020 LvChengbin
 * 
 * File: stepwise/usage.js
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 08/12/2020
 * Description: 
 ******************************************************************/

const { stepwise, step, beforeEach, afterEach, beforeAll, afterAll } = require( 'stepwise' );

const steps = stepwise( 'Stepwise', () => {
    beforeAll( () => {
    } );

    beforeEach( () => {
    } );

    afterEach( () => {
    } );

    afterAll( () => {
    } );

    step( 'description', () => {
    } );

    step( () => [
        step( '', () => {} ),
        step( '', () => {} ),
        step( '', () => {} ),
        step( '', () => {} )
    ] );

    step( 1000 );

    step( stepwise( 'Sub stepwide', () => {} ) );

} ).run();

const steps2 = stepwise( 'Stepwise' )
    .beforeAll( () => {} )
    .beforeEach( () => {} )
    .afterAll( () => {} )
    .afterEach( () => {} )
    .step( 'description', () => {
    } )
    .step( () => [
    ] )
    .step( stepwise() )
    .run();

steps.on( 'step', () => {
    steps.pause();
    setTimeout( () => {
        steps.resume();
    }, 1000 );
} );

