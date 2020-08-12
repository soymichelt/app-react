import React from 'react';
import {shallow,} from 'enzyme';
import {Posts} from './../../../posts';
import {ListPost,} from './../../../__mocks__/list-post.mock';

describe('Testing Posts Container Component', () => {
    beforeAll(() => {
        global.fetch = jest.fn();
    });
    beforeEach(() => {
        React.useEffect = jest.spyOn(React, 'useEffect').mockImplementation(f => f());
    });
    it('Testing useEffect in Posts', () => {
        fetch.mockImplementation(() => {
            return Promise.resolve({
                status: 200,
                json: () => {
                    return Promise.resolve({
                        results: ListPost,
                    });
                },
            });
        });
        const wrapper = shallow(<Posts />);
        expect(wrapper.find('li')).toBeTruthy();
    })
});