/**
 * Geb-udedoc - Gebäudesystemintegrationssoftware
 * Building System Integration Software
 */

/**
 * Hauptmodul für die Gebäudesystemintegration
 * @module geb-udedoc
 */

/**
 * Initialisiert das Gebäudesystemintegrationssystem
 * @returns {Object} System-Interface
 */
function initializeSystem() {
  return {
    version: require('./package.json').version,
    name: 'Geb-udedoc',
    description: 'Gebäudesystemintegrationssoftware',
    
    /**
     * Startet die Systemintegration
     */
    start() {
      console.log('Gebäudesystemintegration gestartet...');
    },
    
    /**
     * Stoppt die Systemintegration
     */
    stop() {
      console.log('Gebäudesystemintegration gestoppt.');
    }
  };
}

module.exports = {
  initializeSystem,
  version: require('./package.json').version
};