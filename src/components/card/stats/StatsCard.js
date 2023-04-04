import React from 'react';
import StatsCardItem from './StatsCartdtem';
import { Repos, Followers, Following, Gists } from '@/icons'
import styles from '@/components/card/stats/styles/StatsCard.module.scss'

const StatsCard = ({ data }) => {
    return (
        <section>
            <div className="container">
                <div className={styles['stats-container']}>
                    <StatsCardItem icon={<Repos />} text='repos' num={data?.public_repos} />
                    <StatsCardItem icon={<Followers />} text='followers' num={data?.followers} />
                    <StatsCardItem icon={<Following />} text='following' num={data?.following} />
                    <StatsCardItem icon={<Gists />} text='gists' num={data?.public_gists} />
                </div>

            </div>
        </section>
    );
};

export default StatsCard;
