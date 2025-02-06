import React from 'react';
import { Tractor, Map, Ruler, Droplets } from 'lucide-react';

const FarmManagement = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Farm Management</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Farm Details */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center mb-4">
            <Tractor className="w-6 h-6 text-green-500 mr-2" />
            <h2 className="text-lg font-semibold text-gray-700">Farm Details</h2>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Total Area</span>
              <span className="font-semibold">5.5 hectares</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Soil Type</span>
              <span className="font-semibold">Clay Loam</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Current Crops</span>
              <span className="font-semibold">Rice, Wheat</span>
            </div>
          </div>
        </div>

        {/* Resource Usage */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center mb-4">
            <Droplets className="w-6 h-6 text-blue-500 mr-2" />
            <h2 className="text-lg font-semibold text-gray-700">Resource Usage</h2>
          </div>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-gray-600">Water Usage</span>
                <span className="text-sm font-semibold">75%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '75%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-gray-600">Fertilizer Stock</span>
                <span className="text-sm font-semibold">45%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '45%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FarmManagement;