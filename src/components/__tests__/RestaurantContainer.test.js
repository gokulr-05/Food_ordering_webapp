import { render, screen, fireEvent } from '@testing-library/react';
import RestaurantContainer from '../RestaurantContainer';
import '@testing-library/jest-dom';
import MOCK_DATA from '../mocks/resContainerMock.json';

describe('RestaurantContainer Page Test Case', () => {
  test('Should load RestaurantContainer component', () => {
    render(<RestaurantContainer restaurantList={MOCK_DATA} />);
    const res = screen.getByText('Millet Express');
    expect(res).toBeInTheDocument();
  });
});
