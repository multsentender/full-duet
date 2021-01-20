import React from 'react'

const AdminCard = ({
    el,
    removeCard,
    isGallery,
    category,
    updateCard,
}) => {
    const {
        manuf,
        title,
        price,
        imageUrl,
        description,
        application} = el
    return (
        <div className="admin-card">
            {imageUrl && (
            <div className="admin-card__image">
                <img src={imageUrl} alt="card"/>
            </div>
            )}
            {title && (
                <div className="admin-card__info">
                    <h4>{title}</h4>
                    {manuf && (
                        <div>
                            <h3>{manuf}</h3>
                            <b>{description}</b>
                            <p>{application}</p>
                            <span>{price}₽</span>
                        </div>
                    )}
            </div>
            )}
            <div className="change-card">
                {!isGallery && (
                    <button onClick={() => updateCard(category, el)} className="update-card">
                        <svg height="30" viewBox="0 0 512 512" width="30" xmlns="http://www.w3.org/2000/svg"><g id="Solid"><path d="m464.022 232h-.022a24 24 0 0 0 -23.98 24.021 184.063 184.063 0 0 1 -289.527 150.688c-83.1-58.188-103.369-173.136-45.181-256.237s173.137-103.372 256.237-45.182a184.078 184.078 0 0 1 34.012 30.71h-67.54a24 24 0 0 0 0 48h112a24 24 0 0 0 24-24v-112a24 24 0 0 0 -48 0v39.967a234.175 234.175 0 0 0 -26.94-22 231.982 231.982 0 1 0 -266.119 380.061 230.285 230.285 0 0 0 132.567 42.015 234.971 234.971 0 0 0 40.776-3.585 232.025 232.025 0 0 0 191.716-228.479 24 24 0 0 0 -23.999-23.979z"/></g></svg>
                    </button>
                )}
                <button 
                className="delete-card"
                onClick={removeCard}>
                    <svg
                    width="32"
                    height="32"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                    d="M2.5 5H4.16667H17.5"
                    stroke="black"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    />
                    <path
                    d="M6.66663 5.00001V3.33334C6.66663 2.89131 6.84222 2.46739 7.15478 2.15483C7.46734 1.84227 7.89127 1.66667 8.33329 1.66667H11.6666C12.1087 1.66667 12.5326 1.84227 12.8451 2.15483C13.1577 2.46739 13.3333 2.89131 13.3333 3.33334V5.00001M15.8333 5.00001V16.6667C15.8333 17.1087 15.6577 17.5326 15.3451 17.8452C15.0326 18.1577 14.6087 18.3333 14.1666 18.3333H5.83329C5.39127 18.3333 4.96734 18.1577 4.65478 17.8452C4.34222 17.5326 4.16663 17.1087 4.16663 16.6667V5.00001H15.8333Z"
                    stroke="black"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    />
                    <path
                    d="M8.33337 9.16667V14.1667"
                    stroke="black"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    />
                    <path
                    d="M11.6666 9.16667V14.1667"
                    stroke="black"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    />
                </svg>
                </button>
            </div>
        </div>
    )
}

export default AdminCard
