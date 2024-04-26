"use client";
import Link from "next/link";
import { Nav } from "react-bootstrap";

export default function AuthorizedSideBar() {
  return (
    <aside className="bg-white min-vh-100 border-end shadow-sm">
      <div className="d-flex flex-column flex-shrink-0">
        <Nav variant="pills" className="flex-column text-center mb-auto">
          <Nav.Item>
            <Nav.Link
              className="py-3 rounded-0 border-bottom"
              as={Link}
              href="/"
              active
            >
              <em className="fa-solid fa-lg fa-home"></em>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    </aside>
  );
}
