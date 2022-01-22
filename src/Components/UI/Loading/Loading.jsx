import React from 'react';
import classes from './Loading.module.css'
const Loading = () => {
    return (
            <div className={classes.loading}>
                <div className={classes.loadingContent}>
                    <div className={classes.animationBody}>
                        Загрузка...
                    </div>
                </div>
            </div>
    );
};

export default Loading;