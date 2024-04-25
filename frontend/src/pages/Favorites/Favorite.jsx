import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const Favorite = () => {
  // Set State
  const [favorites, setFavorites] = useState([]);

  // Import useEffects
  useEffect(() => {
    fetchFavorites();
  }, []);

  // Functions
  // Get fav list(s)
  const fetchFavorites = async () => {
    try {
      // Fetch favorites list
      const res = await axios.get("https://perscholascapstoneproject.onrender.com/favorites");
      // Set to state
      setFavorites(res.data.favorites);
    } catch (error) {
      console.error('Error fetching favorites:', error);
    }
  };

  // Delete a favorite
  const deleteFavorite = async (id) => {
    try {
      // Delete the fav
      await axios.delete(`https://perscholascapstoneproject.onrender.com/favorites/${id}`);
      // Update state
      setFavorites(favorites.filter(favorite => favorite._id !== id));
    } catch (error) {
      console.error('Error deleting pokemon from favorites:', error);
    }
  };

  // Drag and drop end handler
  const onDragEnd = (result) => {
    if (!result.destination) return; // if dropped outside the list
    const items = Array.from(favorites);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setFavorites(items);
    // You should also send the new order to the server to update the order there
  };

  return (
    <div>
      <h1>Favorite Pokemon</h1>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="favorites">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {favorites.map((favorite, index) => (
                <Draggable key={favorite._id} draggableId={favorite._id} index={index}>
                  {(provided) => (
                    <div
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                    >
                      <div className="favorite">
                        <img src={favorite.image} alt={favorite.name} />
                        <div>
                          <h3>{favorite.name}</h3>
                          <button onClick={() => deleteFavorite(favorite._id)}>Delete</button>
                        </div>
                      </div>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

export default Favorite;
