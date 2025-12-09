import React from "react";
import { FaPlay, FaTrash } from "react-icons/fa";

export default function UpNext({ upNextQueue, currentTrack, onPlay, onRemove, onClear }) {
  if (!upNextQueue?.length)
    return (
      <div style={{ color: "#aaa", fontSize: 14, textAlign: "center", padding: 20 }}>
        Queue is empty
      </div>
    );

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingBottom: 8,
          borderBottom: "1px solid rgba(255,255,255,0.1)",
          marginBottom: 8,
        }}
      >
        <h3 style={{ color: "#fff", fontSize: 16 }}>Up Next</h3>
        <button
          onClick={onClear}
          style={{
            background: "transparent",
            border: "none",
            color: "#f87171",
            cursor: "pointer",
            fontSize: 12,
          }}
        >
          Clear All
        </button>
      </div>

      {upNextQueue.map((track, i) => {
        const isActive = track.videoId === currentTrack?.videoId;
        return (
          <div
            key={track.videoId}
            onClick={() => onPlay(track)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "6px 8px",
              borderRadius: 8,
              cursor: "pointer",
              background: isActive
                ? "rgba(139,92,246,0.15)"
                : "rgba(255,255,255,0.05)",
              transition: "background 0.2s ease",
            }}
          >
            <img
              src={track.thumbnail}
              alt={track.title}
              style={{
                width: 50,
                height: 50,
                borderRadius: 6,
                objectFit: "cover",
              }}
            />
            <div style={{ flex: 1 }}>
              <div
                style={{
                  color: "#fff",
                  fontWeight: isActive ? 600 : 500,
                  fontSize: 14,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {track.title}
              </div>
              <div style={{ color: "#aaa", fontSize: 12 }}>{track.artist}</div>
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                onPlay(track);
              }}
              style={{
                background: "transparent",
                border: "none",
                color: "#8b5cf6",
                cursor: "pointer",
              }}
            >
              <FaPlay size={14} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                onRemove(track.videoId);
              }}
              style={{
                background: "transparent",
                border: "none",
                color: "#f87171",
                cursor: "pointer",
              }}
            >
              <FaTrash size={13} />
            </button>
          </div>
        );
      })}
    </div>
  );
}
