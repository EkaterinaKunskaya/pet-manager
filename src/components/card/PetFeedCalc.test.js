import React from 'react';
import PetFeedCalc from './PetFeedCalc';
import { render } from '@testing-library/react';

describe('PetFeedCalc', () => {
    test('PetFeedCalc', async () => {
        const { container } = render(<PetFeedCalc card={{id:"ZTBaQrUWvPV0kMKsnduwL", petName:"Милка",view:"Собака"}} />)
        const calories = container.querySelector('#calories');
        const activity = container.querySelector('#activity');
        const weight = container.querySelector('#weight');

        expect(calories).toBeDefined();
        expect(activity).toBeDefined();
        expect(weight).toBeDefined();
    })
})