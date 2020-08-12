import React from 'react';
import {shallow} from 'enzyme';
import {create,} from 'react-test-renderer';
import {PostList} from './../../../posts/post-list';
import {ListPost} from './../../../__mocks__/list-post.mock';

describe("Testing PostList Component", () => {

    const wrapper = shallow(<PostList />);

    it('Renderizado del componente', () => {
        expect(wrapper.length).toEqual(1)
    })

    it("Render del título del componente", () => {
        expect(wrapper.find('.header-title').text()).toEqual('Listado de Datos')
    });

    it("Render de la lista", () => {
        expect(wrapper.find('ul').length).toEqual(1)
    })
});

describe('Instantanea PostList Component', () => {
    it('Renderizado del componente', () => {
        expect(create(<PostList data={ListPost} />).toJSON()).toMatchSnapshot()
    })
})