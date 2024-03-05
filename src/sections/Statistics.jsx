import React from 'react'
import Stats from '../components/statisticsComponents/Stats';

const statistics = [
    {
        stats: 23,
        label: "Years Experience",
        desc: "Quisque volutpat mattis eros. Nullam malesuada erat ut turpis."
    },
    {
        stats: 3200,
        label: "Hours of Cooking",
        desc: "Quisque volutpat mattis eros. Nullam malesuada erat ut turpis."
    },
    {
        stats: 5000,
        label: "Happy Clients",
        desc: "Quisque volutpat mattis eros. Nullam malesuada erat ut turpis."
    },
    {
        stats: 12,
        label: "Skilled Chefs",
        desc: "Quisque volutpat mattis eros. Nullam malesuada erat ut turpis."
    },
]
function Statistics() {
    return (
        <section id='statistics-section' className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap text-center">
                    {
                        statistics.map(
                            (statistic, i) => {
                                return <Stats key={i} statistic={statistic} />
                            }
                        )
                    }
                </div>
            </div>
        </section>
    )
}

export default Statistics;
