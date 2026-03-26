import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import AdminToggle from '@/components/AdminToggle';

describe('AdminToggle', () => {
    it('renders with label and description', () => {
        render(
            <AdminToggle 
                label="Sample Label" 
                checked={false} 
                onChange={() => {}} 
                description="Sample Description" 
            />
        );
        
        expect(screen.getByText('Sample Label')).toBeInTheDocument();
        expect(screen.getByText('Sample Description')).toBeInTheDocument();
    });

    it('calls onChange when clicked', () => {
        const handleChange = vi.fn();
        render(
            <AdminToggle 
                label="Toggle me" 
                checked={false} 
                onChange={handleChange} 
            />
        );
        
        const checkbox = screen.getByRole('checkbox');
        fireEvent.click(checkbox);
        
        expect(handleChange).toHaveBeenCalledWith(true);
    });

    it('displays correctly when checked', () => {
        render(
            <AdminToggle 
                label="Checked Toggle" 
                checked={true} 
                onChange={() => {}} 
            />
        );
        
        const checkbox = screen.getByRole('checkbox') as HTMLInputElement;
        expect(checkbox.checked).toBe(true);
    });
});
