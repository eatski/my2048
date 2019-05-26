import React from 'react';
import Box from '@/components/box/BoxAdaptor';
import css from "@/style.scss"

class Playing extends React.Component {
    render(){
        return (
            <div className={css.center}>
                <div>Press Any Direction Key!!</div>
                <Box/>
            </div>
        );
    }
}

export default Playing;