import React from 'react'
import { ItemsData, ItemsProps } from '../../../../../../interface/interface'

const AdminSkeletSoftOptions: React.FC<ItemsData> = ({ items }) => {
  return (
    <div className="centerPathAdminRate">
      {items.map((item: ItemsProps) => (
        <div className="lineCheckBox" key={item.id}>
          <input
            type="checkBox"
            className="inputCheckBox"
            checked={item.value}
          />
          <p className="checkBoxTextAdmin">{item.name}</p>
        </div>
      ))}
    </div>
  )
}

export default AdminSkeletSoftOptions
