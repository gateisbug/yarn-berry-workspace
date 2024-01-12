// noinspection TypeScriptUnresolvedReference,JSUnresolvedReference

// useClickAway.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import useClickAway from './useClickAway';

type Props = {
  onClickAway?: () => void;
};

const TestComponent = ({ onClickAway }: Props) => {
  const ref = useClickAway<HTMLDivElement>(onClickAway);
  return (
    <div ref={ref} data-testid='test-div'>
      Test Div
    </div>
  );
};

describe('useClickAway', () => {
  it('calls onClickAway when clicking outside the element', () => {
    const onClickAway = jest.fn();
    const { getByTestId } = render(<TestComponent onClickAway={onClickAway} />);
    const testDiv = getByTestId('test-div');

    // 클릭 이벤트 발생
    fireEvent.click(document);
    expect(onClickAway).toHaveBeenCalled();

    // 요소 내부에서 클릭할 경우 onClickAway가 호출되지 않아야 함
    fireEvent.click(testDiv);
    expect(onClickAway).toHaveBeenCalledTimes(1);
  });
});
