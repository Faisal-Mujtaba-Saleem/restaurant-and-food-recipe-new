import React from 'react';
import MediaLinks from '..//commons/MediaLinks'

function TeamMember({ teamMember }) {
    return (
        <div className="p-4 lg:w-1/4 md:w-1/2 w-full">
            <div className="h-[full] flex flex-col items-center text-center group">
                <img alt={teamMember.memberName} className="flex-shrink-0 rounded-lg w-full h-56 object-contain object-center mb-4" src={teamMember.memberImg} />
                <div className="w-full font-playfairDisplay">
                    <h2 className="title-font font-medium text-lg tracking-wider leading-relaxed text-[#222222] hover:text-[#f4b350] group-hover:text-[#f4b350]">
                        {teamMember.memberName}
                    </h2>
                    <h3 className="text-gray-500 mb-3 text-base italic after:bg-black after:group-hover:bg-[#f4b350] after:block after:m-auto after:w-8 after:h-[3px] after:my-4">
                        {teamMember.role}
                    </h3>
                    <p className="mb-4 px-4 font-rubic text-sm tracking-wide font-thin text-[#999999]">
                        {teamMember.description}
                    </p>
                    <span className="inline-flex">
                        <MediaLinks mediaNames={['facebook', 'twitter', 'messanger']} />
                    </span>
                </div>
            </div>
        </div>
    )
}

export default TeamMember
