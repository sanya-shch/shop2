import React from 'react';
import MenuItem from '../menu-item/MenuItem';
import './directory.styles.scss';

class Directory extends React.Component {
    state = {
        sections: [
            {
                title: 'hats',
                imageUrl: 'https://images.unsplash.com/photo-1529958030586-3aae4ca485ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
                id: 1,
                linkUrl: 'hats'
            },
            {
                title: 'jackets',
                imageUrl: 'https://images.unsplash.com/photo-1561365452-adb940139ffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1038&q=80',
                id: 2,
                linkUrl: 'jackets'
            },
            {
                title: 'sneakers',
                imageUrl: 'https://images.unsplash.com/photo-1516478177764-9fe5bd7e9717?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
                id: 3,
                linkUrl: 'sneakers'
            },
            {
                title: 'womens',
                imageUrl: 'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
                size: 'large',
                id: 4,
                linkUrl: 'womens'
            },
            {
                title: 'mens',
                imageUrl: 'https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
                size: 'large',
                id: 5,
                linkUrl: 'mens'
            }
        ]
    };

    render() {
        return (
            <div className='directory-menu'>
                {
                    this.state.sections.map(({ id, ...otherSectionProps }) => (
                        <MenuItem key={id} {...otherSectionProps} />
                    ))
                }
            </div>
        );
    }
}

export default Directory;