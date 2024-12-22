"use client";
import { useState } from 'react';
import { Button } from '@mui/material'; // You can use Material UI components
import Image from 'next/image';
import Link from 'next/link'; // Import Link component from Next.js

const GRID_SIZE = 10; // Grid size (10x10)
const CELL_SIZE = 40; // Width/height of each grid cell
const baseCoordinates = { x: 5, y: 5 }; // Base coordinates (ensure it's different from trash coordinates)

// Coordinates for trash cans
const trashCanCoordinates = [
  { x: 2, y: 3 },
  { x: 3, y: 8 },
  { x: 4, y: 2 },
  { x: 6, y: 9 },
];

const MapPage = () => {
  const [selectedTrashCan, setSelectedTrashCan] = useState(null);
  const [highlightedPath, setHighlightedPath] = useState([]);

  // Function to calculate the path from the base to a selected trash can (using Manhattan path)
  const calculatePath = (trashCan) => {
    const path = [];
    const { x: baseX, y: baseY } = baseCoordinates;
    const { x: trashX, y: trashY } = trashCan;

    // Horizontal and vertical path calculation
    const deltaX = trashX - baseX;
    const deltaY = trashY - baseY;

    // Add the initial coordinate (base position)
    path.push({ x: baseX, y: baseY });

    // Move horizontally to the correct x-coordinate
    for (let i = 1; i <= Math.abs(deltaX); i++) {
      path.push({ x: baseX + (deltaX > 0 ? i : -i), y: baseY });
    }

    // Move vertically to the correct y-coordinate
    for (let i = 1; i <= Math.abs(deltaY); i++) {
      path.push({ x: trashX, y: baseY + (deltaY > 0 ? i : -i) });
    }

    setHighlightedPath(path);
  };

  return (
    <div className="relative mt-[60px]">
      {/* Map container with background image */}
      <div
        className="relative"
        style={{
          width: GRID_SIZE * CELL_SIZE + 'px',
          height: GRID_SIZE * CELL_SIZE + 'px',
          backgroundImage: 'url(/map.jpg)', // Use the image as background
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Base position */}
        <div
          className="absolute bg-blue-500 rounded-full"
          style={{
            width: CELL_SIZE,
            height: CELL_SIZE,
            left: baseCoordinates.x * CELL_SIZE - CELL_SIZE / 2,
            top: baseCoordinates.y * CELL_SIZE - CELL_SIZE / 2,
          }}
        />
        
        {/* Trash can positions */}
        {trashCanCoordinates.map((trashCan, index) => (
          <div
            key={index}
            className="absolute bg-red-500 rounded-full cursor-pointer"
            style={{
              width: CELL_SIZE,
              height: CELL_SIZE,
              left: trashCan.x * CELL_SIZE - CELL_SIZE / 2,
              top: trashCan.y * CELL_SIZE - CELL_SIZE / 2,
            }}
            onClick={() => {
              setSelectedTrashCan(trashCan);
              calculatePath(trashCan);
            }}
          />
        ))}
        
        {/* Highlighted path */}
        {highlightedPath.map((point, index) => (
          <div
            key={index}
            className="absolute bg-green-500 opacity-50"
            style={{
              width: CELL_SIZE,
              height: CELL_SIZE,
              left: point.x * CELL_SIZE - CELL_SIZE / 2,
              top: point.y * CELL_SIZE - CELL_SIZE / 2,
            }}
          />
        ))}
      </div>

      {/* Display selected trash can details */}
      {selectedTrashCan && (
        <div className="mt-4 text-center">
          <h2>Selected Trash Can:</h2>
          <p>Coordinates: ({selectedTrashCan.x}, {selectedTrashCan.y})</p>
        </div>
      )}

      {/* Optional Button to clear path */}
      <div className="mt-4 text-center">
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            setHighlightedPath([]);
            setSelectedTrashCan(null);
          }}
        >
          Clear Path
        </Button>
      </div>

      {/* Link Button to return to the /map route */}
      <div className="mt-4 text-center">
        <Link href="/main">
          <Button variant="outlined" color="secondary">
            Return
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default MapPage;
