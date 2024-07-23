import React from 'react'
import GroupItem from './GroupItem/GroupItem.js';
import "./Group.css"

export default function Group() {
  return (
    <div className='group-container'>
        <div className="title">
            <h2>
                دسته بندی محصولات
            </h2>
        </div>
        <div className="groupList">
            <GroupItem text="شیرینی" img="sweet.svg" />
            <GroupItem text="انواع قهوه" img="coffeeBeans.svg" />
            <GroupItem text="بیرون بر" img="coffee.svg" />
            <GroupItem text="میکس های اسپرسو" img="esperso.svg" />
            <GroupItem text="تجهیزات" img="tools.svg" />
        </div>
    </div>
  )
}
