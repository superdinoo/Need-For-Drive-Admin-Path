import React, { useState } from 'react'
import classNames from 'classnames'
import { adminBtn } from '../constants'
import { Link } from 'react-router-dom'

const AdminMenuLeftLine = () => {
  const [activeCart, setActiveCart] = useState(adminBtn)

  const handleActiveCart = (id: number) => {
    setActiveCart((prevBtns) => {
      const updatedAdminBtn = prevBtns.map((blockBtn) => ({
        ...blockBtn,
        isActive: blockBtn.id === id,
      }))

      return updatedAdminBtn
    })
  }

  const activeElement = activeCart.find(
    (blockMenu) => blockMenu.isActive === true,
  )
  return (
    <>
      {adminBtn.map((blockMenu) => (
        <div className="adminMenuleftOneCartContainer" key={blockMenu.id}>
          <Link to={blockMenu.Path}>
            <button
              className={classNames('adminMenuLeftOneCart', {
                adminOneCartActive: blockMenu.id === activeElement?.id,
              })}
              type="button"
              onClick={() => handleActiveCart(blockMenu.id)}
              id={`${blockMenu.id}`}
            >
              <img
                src={blockMenu.img}
                alt="imgCart"
                className={classNames('adminPaintLeftCart', {
                  adminOneCartActivePaint: blockMenu.id === activeElement?.id,
                })}
              />
              <p
                className={classNames('adminTextCart', {
                  adminOneCartActiveText: blockMenu.id === activeElement?.id,
                })}
              >
                {blockMenu.name}
              </p>
            </button>
          </Link>
        </div>
      ))}
    </>
  )
}

export default AdminMenuLeftLine
